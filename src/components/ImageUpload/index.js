import React, { useState } from 'react';
import { Badge, Box, Button, CircularProgress, Grid, Stack } from '@mui/material';
import { styled } from "@mui/material/styles";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Avatar from "@mui/material/Avatar";

const ImageUpload = ({ onImageUpload, userImage }) => {
    const [previewUrl, setPreviewUrl] = useState(userImage);
    const [loading, setLoading] = useState(false);

    const SmallAvatar = styled(Avatar)(({ theme }) => ({
        width: 20,
        height: 20,
        border: `2px solid ${theme.palette.background.paper}`,
    }));

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(e.target.files[0]);
            onImageUpload(e.target.files[0]);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" className='my-4'>
            <Grid item xs={4}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <input
                        accept="image/*"
                        type="file"
                        id="image-upload"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="image-upload">
                        <Stack direction="row" justifyContent="center">
                            <Badge
                                overlap="circular"
                                style={{ cursor: "pointer" }}
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                // onClick={() => imageRef.current.click()}
                                badgeContent={
                                    <SmallAvatar alt="Remy Sharp">
                                        <PhotoCameraIcon
                                            style={{
                                                fontSize: "15px",
                                                background: "#1976d2",
                                            }}
                                        />
                                    </SmallAvatar>
                                }
                            >
                                <Avatar
                                    alt="Avatar"
                                    src={previewUrl?.length ? previewUrl : "/static/images/avatar/2.jpg"}
                                    sx={{ width: 75, height: 75 }}
                                />
                            </Badge>
                        </Stack>
                    </label>
                </Box>
            </Grid>

        </Grid>
    );
};

export default ImageUpload;
