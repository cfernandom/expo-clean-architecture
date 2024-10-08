import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Link, useRouter } from "expo-router";
import { Text } from "react-native";
import { UserEntity } from "@/app/domain/entities/User.Entity";
import React, { useEffect } from "react";

export default function UserListComponent({ users }: { users: UserEntity[] }) {

    useEffect(() => {
        console.log("hola")
        console.log()
    }, [])

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {users.map((user, index) => (
                <React.Fragment key={user.id}>
                    <Link href={{
                        pathname: '/(presentation)/(screens)/user/details',
                        params: { id: user.id }
                    }}>

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={user.picture} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={user.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'text.primary', display: 'inline' }}
                                        >
                                            {user.lastName}
                                        </Typography>
                                        {user.firstName + " " + user.lastName}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>

                    </Link>
                    <Divider variant="inset" component="li" key={user.id + "divider"} />
                </React.Fragment>
            ))}
        </List>
    )
}