package cn.gradle.springboot.webapp.config;

import cn.gradle.springboot.util.StringToDatetimeConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.thymeleaf.spring4.view.ThymeleafViewResolver;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Sayid on 2016/12/28.
 */

@Configuration
@ComponentScan(basePackages="cn.gradle.springboot.**.web.controllers")
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    @Autowired
    private Environment env;


    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
//        argumentResolvers.add(currentUserHandlerMethodArgumentResolver());
//        argumentResolvers.add(new ChildUserHandlerMethodArgumentResolver());
    }

    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addConverter(new StringToDatetimeConverter());
    }

}
