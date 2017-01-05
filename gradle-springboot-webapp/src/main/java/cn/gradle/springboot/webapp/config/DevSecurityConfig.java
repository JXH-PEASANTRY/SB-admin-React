package cn.gradle.springboot.webapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Profile("dev")
@Configuration
@Order(2)
public class DevSecurityConfig extends WebSecurityConfigurerAdapter {


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
        .authorizeRequests()
            .antMatchers("/admin/**").authenticated()
            .anyRequest().permitAll()
            .and()
        .formLogin()
//				.loginPage("/login") //定义自己的登陆页面
            .permitAll()
            .and()
        .logout()
            .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
            .and()
        .headers()
            .frameOptions()
            .sameOrigin();
	}

}
