import React,{ useState} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';


function Form() {
   
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

  const clear = () => {
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };
    const handleSubmit = async (e) => {
        e.preventDefault();
       
      };
    
    
  return (
    <>
    <Paper >
  <form autoComplete="off" noValidate onSubmit={handleSubmit}>
    <Typography variant="h6"> Creating Memories</Typography>

    <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />

    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />


    <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

    <TextField name="tags" variant="outlined" label="Tags (seperated by comma)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

    <div ><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

    <Button variant="contained" color="primary"  type="submit" >Submit</Button>
    
    <Button variant="contained" color="secondary" onClick={clear} >Clear</Button>
  </form>
</Paper>
</>
  )
}

export default Form