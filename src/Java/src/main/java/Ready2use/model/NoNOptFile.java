package Ready2use.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ready2use.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: NoNOptFile
 */
@Entity(name = "IISReady2useNoNOptFile")
@Table(schema = "public", name = "NoNOptFile")
public class NoNOptFile {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Date")
    private Date date;

    @Column(name = "Name")
    private String name;

    @Column(name = "Repository")
    private String repository;

    @Column(name = "Size")
    private Integer size;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ValueOfSize")
    @Convert("ValueOfSize")
    @Column(name = "ValueOfSize", length = 16, unique = true, nullable = false)
    private UUID _valueofsizeid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ValueOfSize", insertable = false, updatable = false)
    private ValueOfSize valueofsize;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Execution")
    @Convert("Execution")
    @Column(name = "Execution", length = 16, unique = true, nullable = false)
    private UUID _executionid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Execution", insertable = false, updatable = false)
    private Execution execution;


    public NoNOptFile() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getDate() {
      return date;
    }

    public void setDate(Date date) {
      this.date = date;
    }

    public String getName() {
      return name;
    }

    public void setName(String name) {
      this.name = name;
    }

    public String getRepository() {
      return repository;
    }

    public void setRepository(String repository) {
      this.repository = repository;
    }

    public Integer getSize() {
      return size;
    }

    public void setSize(Integer size) {
      this.size = size;
    }


}