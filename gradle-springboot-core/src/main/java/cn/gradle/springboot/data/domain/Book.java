package cn.gradle.springboot.data.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Sayid on 2016/12/27.
 */

@Entity
public class Book extends AbstractEntityAuditable<Integer> {
    private static final long serialVersionUID = 1L;

    private String render;
    private String isban;
    private String title;
    private String author;
    private String description;

    @Id
    @GeneratedValue
    public Integer getId() {
        return super.getId();
    }

    @Column(name = "render", length = 50)
    public String getRender() {
        return render;
    }

    public void setRender(String render) {
        this.render = render;
    }

    @Column(name = "isban", length = 50)
    public String getIsban() {
        return isban;
    }

    public void setIsban(String isban) {
        this.isban = isban;
    }

    @Column(name = "title", length = 50)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(name = "author", length = 20)
    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Column(name = "description", length = 200)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
