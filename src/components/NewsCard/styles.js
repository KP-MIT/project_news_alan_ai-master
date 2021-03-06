import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
    {
        media: {
            height: 250,
        },
        border: {
          border: 'solid',
        },
        fullHeightCard: {
          height: '100%',
        },
        card: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderBottom: '10px solid white',
        },
        activeCard: {
          borderBottom: '12px solid #5e60ce',
          borderLeft: '5px solid #5e60ce',
          borderRight: '5px solid #5e60ce'
        },
        grid: {
          display: 'flex',
        },
        details: {
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
        },
        title: {
          padding: '0 16px',
        },
        cardActions: {
          padding: '0 16px 8px 16px',
          display: 'flex',
          justifyContent: 'space-between',
        },
      
    }
);