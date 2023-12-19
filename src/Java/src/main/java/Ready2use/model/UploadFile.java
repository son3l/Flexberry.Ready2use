package Ready2use.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ready2use.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: UploadFile
 */
@Entity(name = "IISReady2useUploadFile")
@Table(schema = "public", name = "UploadFile")
public class UploadFile {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "PathToFile")
    private String pathtofile;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "NoNOptFile")
    @Convert("NoNOptFile")
    @Column(name = "NoNOptFile", length = 16, unique = true, nullable = false)
    private UUID _nonoptfileid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "NoNOptFile", insertable = false, updatable = false)
    private NoNOptFile nonoptfile;


    public UploadFile() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getPathToFile() {
      return pathtofile;
    }

    public void setPathToFile(String pathtofile) {
      this.pathtofile = pathtofile;
    }


}