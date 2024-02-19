import Button from "@mui/material/Button";

const MyButton = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "10px",
        padding: "0.5rem 1rem",
        color: "#fff",
        fontWeight: "500",
        fontSize: "14px",
        backgroundColor: "#1580FA !important",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#156BFA !important",
        },
        "&:disabled": {
          backgroundColor: "#C2C7CD !important",
          color: "#fff",
        },
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
