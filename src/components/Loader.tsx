import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => (
    <Box minHeight="95vh">
        <Stack direction="row" justifyContent="center" alignItems="center" height="80vh">
            <CircularProgress size="6rem" color="error" />
        </Stack>
    </Box>
);

export default Loader;