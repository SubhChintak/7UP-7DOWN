import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


export default function DiceRollResult({ diceRollValue, displayDiceRoll }) {
    return (
        <div>
            {displayDiceRoll && (
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h5">Dice Roll Result </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ border: 1, borderRadius: 2, padding: 1 , maxWidth: 30}}>  {/* Added Box and styles */}
                            <Typography variant="h6">{diceRollValue[0]}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ border: 1, borderRadius: 2, padding: 1 , margin: 1, maxWidth: 30}}>  {/* Added Box and styles */}
                            <Typography variant="h6">{diceRollValue[1]}</Typography>
                        </Box>
                    </Grid>
              </Grid>
              
            )}
        </div>
    );
}
