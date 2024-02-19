import Button from "@mui/material/Button";

const MydarkButton = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "10px",
        padding: "8px 15px",
        color: "#fff",
        fontWeight: "500",
        fontSize: "18px",
        width : props?.w == 'full' ? "100%":"auto",
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

export default MydarkButton;
