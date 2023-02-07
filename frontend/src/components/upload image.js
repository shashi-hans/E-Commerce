import { useState } from "react";
import FileUpload from "react-material-file-upload";

export default function App() {

    const [files, setFiles] = useState<File[]>([]);
    return(
    
    <div className="App">
        <h1>React Material File Uplpad</h1>
        <h2>REact Dropzone based file upload component for Material UI</h2>
        <FileUpload value={files} onChange={setFiles}  multiFile={true}
            leftLabel="or"
            rightLabel="to select files"
            buttonLabel="click here"
            buttonRemoveLabel="Remove all"
            maxFileSize={10}
            maxUploadFiles={0}
            bannerProps={{ elevation: 0, variant: "outlined" }}
            containerProps={{ elevation: 0, variant: "outlined" }}/>
    </div>
    )
}
