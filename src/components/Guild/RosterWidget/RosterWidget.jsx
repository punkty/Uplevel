import React from 'react';
import { GridRow, GridColumn, Grid, CardGroup } from 'semantic-ui-react';
import CharacterCard from '../../CharacterCard';
const Roster = () => {
  return (
    <Grid columns={2}>
      < GridColumn >
        <CardGroup itemsPerRow={4}>
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </CardGroup>
      </GridColumn >
      <GridColumn>
        <CharacterCard />
      </GridColumn>
    </Grid >

  );
};

export default Roster;