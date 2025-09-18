import { createTheme } from "@mui/material/styles";
import colors from "./color";
import typography from "./typography";

const components = {
  MuiTableHead: {
    styleOverrides: {
      root: {
        backgroundColor: colors.gray,
        "& .MuiTableCell-root": {
          color: colors.navbarText,
          fontWeight: "bold",
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontFamily: typography.body2.fontFamily,
        fontSize: typography.body2.fontSize,
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        "&:nth-of-type(odd)": {
          backgroundColor: colors.table,
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
        variantOutlined: {
            borderColor: colors.primary,
            color: colors.primary,
      root: {
        borderRadius: 8,
        textTransform: "none",
        padding: "8px 16px",
        height: 45,
      },
    }
    },
    variants: [
      {
        props: { variant: "delete" },
        style: {
          backgroundColor: colors.buttonDeleteBg,
          color: colors.buttonDeleteText,
          "&:hover": {
            backgroundColor: colors.buttonDeleteHoverBg,
          },
          "&.Mui-disabled": {
            backgroundColor: colors.buttonDeleteDisabledBg,
            color: colors.buttonDeleteDisabledText,
          },
        },
      },
    ],
  },
  MuitextField: {
    styleOverrides: {
        
        root: {
            marginTop: 8,
            marginBottom: 8,
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: colors.border,
                },
                "&:hover fieldset": {
                    borderColor: colors.primary,
  }
            },
            "& .MuiInputLabel-root": {
                color: colors.textSecondary,        
                "&.Mui-focused": {
                    color: colors.primary,
                }
            }
        }
    }
}
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography,
  
  components,
});

export default theme;

