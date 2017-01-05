package cn.gradle.springboot.admin.web.controllers;

import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.util.Auth;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;


/**
 * Created by Administrator on 2017/1/4.
 */
@Controller
@RequestMapping()
public class UploaderController {

    public static final String ACCESS_KEY = "txj38j0TNMtL82kH5dXEWGHuh6pR_Crj_qpYcTkY";
    public static final String SECRET_KEY = "ajdfp4rhP3mI5fmiH0xeiC2Xi96NmDqwL1zgGJcm";
    public static final String BUCKET_NAME = "minjay";


    @RequestMapping(value = {"/uploader"}, method = RequestMethod.POST)
    public ResponseEntity<Void> fileLoader(@RequestParam(name = "file") MultipartFile file) throws IOException {
        Auth auth = Auth.create(ACCESS_KEY, SECRET_KEY);
        String token = auth.uploadToken(BUCKET_NAME);
        Zone z = Zone.autoZone();
        Configuration c = new Configuration(z);
        UploadManager uploadManager = new UploadManager(c);

        byte[] bytes = file.getBytes();

        Response res = uploadManager.put(bytes, file.getName()+(new Date()).toString(), token);
        System.out.println("上传成功是"+ "------------------->>");
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

}
