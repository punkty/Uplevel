import React from 'react';
import { GridRow, GridColumn, Grid } from 'semantic-ui-react';
import CharacterCard from '../CharacterCard';
/**
 * Contains the button and loading for initiating a raid with the given Roster
 * @returns 
 */
const RaidWidget = () => {
    return (
        <Grid>
            <GridRow columns={2}>
                <GridColumn>
                    <CharacterCard />
                </GridColumn>
                <GridColumn>
                </GridColumn>

            </GridRow>
        </Grid>
    );
};

export default RaidWidget;