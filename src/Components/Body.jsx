import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import {
  Avatar,
  Button,
  Card,
  Box,
  CardActions,
  Container,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

let API_KEY = "26938844-3fd4e1df87af07212354bb683";

const search = () => {
  const [search, setsearch] = useState("");
  const [post, setpost] = useState([]);
  const [output, setoutput] = useState(false);
  const [open, setOpen] = useState(false);
  const [url, seturl] = useState("");

  const handleSearch = async () => {
    if (!search) {
      Swal.fire({
        icon: "error",
        text: "Please enter something to search",
      });
      return;
    }

    try {
      const data = await axios.get(
        "https://pixabay.com/api/?key=" + API_KEY + "&q=" + search
      );
      console.log(data.data.hits);
      
      setpost(data.data.hits);
      setoutput(true);
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Failed to Load the Search Results",
      }); 
    }
  };

  const handleClickOpen = (url) => {
    seturl(url);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="outlined-basic"
            label="Search for Images"
            variant="outlined"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />

          <Button variant="outlined" onClick={handleSearch}>
            Go
          </Button>
        </Box>
      </div>
      {output ? (
        <div
          style={{
            display: "flex",

            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          {post.map((posts) => (
            <div
              style={{
                margin: "10px",
              }}
            >
              <Card
                sx={{
                  width: 345,
                  boxShadow: 1,
                  "&:hover": {
                    boxShadow: 6,
                  },
                  borderRadius: 5,
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  // title=
                />
                <CardMedia
                  component="img"
                  minWidth="100"
                  maxWidth="100"
                  height="180"
                  image={posts.webformatURL}
                  onClick={() => handleClickOpen(posts.webformatURL)}
                />
                <CardContent>
                  <Grid spacing={5} sx={{ display: "flex" }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      margin={1}
                    >
                      comments: {posts.comments}
                    </Typography>
                    <Typography
                      variant="body2"
                      margin={1}
                      color="text.secondary"
                    >
                      {" "}
                      likes: {posts.likes}
                    </Typography>
                  </Grid>
                  <Box sx={{ display: "flex" }}></Box>
                </CardContent>
                <CardActions disableSpacing></CardActions>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <Container sx={{ mt: 15, minHeight: "80vh" }} align="center">
          <iframe
            height="350px"
            width="1000px"
            src="https://embed.lottiefiles.com/animation/85474"
          ></iframe>
        </Container>
      )}

      <Dialog open={open} onClose={handleClose}>
        <CardMedia component="img" width="100%" height="200%" image={url} />
      </Dialog>
    </div>
  );
};

export default search;
