package cn.gradle.springboot.webapp;

import cn.gradle.springboot.service.EntityService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * Created by Sayid on 2016/12/27.
 */


@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Configuration
    @EnableTransactionManagement
    @EnableJpaAuditing
    @EnableJpaRepositories(basePackages = "cn.gradle.springboot.data.repository")
    @EntityScan(basePackages = "cn.gradle.springboot.data.domain")
    static class JpaConfig {}

    @Configuration
    @ComponentScan(basePackageClasses={EntityService.class})
    static class ServiceConfig {}

}
