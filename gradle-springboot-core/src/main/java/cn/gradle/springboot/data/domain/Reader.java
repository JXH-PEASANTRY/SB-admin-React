package cn.gradle.springboot.data.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Sayid on 2016/12/28.
 */
@Entity
public class Reader extends AbstractEntityAuditable<Integer> {
    private static final long serialVersionUID = 1L;

    private String username;
    private String fullname;
    private String password;

    @Id
    @GeneratedValue
    public Integer getId() {
        return super.getId();
    }


    @Column(name = "username", length = 50)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Column(name = "fullname", length = 50)
    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    @Column(name = "password", length = 50)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
