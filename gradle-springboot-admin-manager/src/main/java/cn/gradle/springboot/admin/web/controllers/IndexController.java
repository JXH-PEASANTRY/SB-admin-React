package cn.gradle.springboot.admin.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping()
public class IndexController {

    @RequestMapping({"","/"})
    public String home() {
        System.out.print("--------------------------------->成功条用controller层");
        return "admin/index";
    }

}

