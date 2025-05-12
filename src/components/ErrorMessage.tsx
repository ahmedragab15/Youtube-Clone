import { Box, Typography } from "@mui/material";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h6" color="error">
        {message}
      </Typography>
      <Typography variant="body2" color="gray">
        Please try again later or contact the site owner if this issue persists.
      </Typography>
    </Box>
  );
};

export default ErrorMessage;