import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const errorObj = useRouteError();

    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Heading>Oopa</Heading>
                <Text>
                    {isRouteErrorResponse(errorObj) ?
                        'This page does not exist.' :
                        'An unexpected error occurr.'
                    }
                </Text>
            </Box>
        </>
    )
}

export default ErrorPage;