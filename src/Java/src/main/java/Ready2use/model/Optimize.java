package Ready2use.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ready2use.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Optimize
 */
@Entity(name = "IISReady2useOptimize")
@Table(schema = "public", name = "Optimize")
public class Optimize {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "lvlCompress")
    private Integer lvlcompress;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Method")
    @Convert("Method")
    @Column(name = "Method", length = 16, unique = true, nullable = false)
    private UUID _methodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Method", insertable = false, updatable = false)
    private Method method;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "UploadFile")
    @Convert("UploadFile")
    @Column(name = "UploadFile", length = 16, unique = true, nullable = false)
    private UUID _uploadfileid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "UploadFile", insertable = false, updatable = false)
    private UploadFile uploadfile;


    public Optimize() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getlvlCompress() {
      return lvlcompress;
    }

    public void setlvlCompress(Integer lvlcompress) {
      this.lvlcompress = lvlcompress;
    }


}