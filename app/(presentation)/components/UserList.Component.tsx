import { UserEntity } from "@/app/domain/entities/User.Entity";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Text } from "react-native";

export default function UserListComponent({ users }: { users: UserEntity[] }) {

    useEffect(() => {
        console.log("hola")
        console.log()
    }, [])


    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {users.map((user, index) => (
                <React.Fragment key={user.id}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={user.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        {user.name}
                                    </Typography>
                                    - {user.email.email}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" key={user.id + "divider"} />
                </React.Fragment>
            ))}
        </List>


    )
}