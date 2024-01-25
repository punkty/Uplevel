import React from 'react';
import Menu from './../../components/Menu';
import RaidWidget from '../../components/RaidWidget/RaidWidget';
import RosterWidget from '../../components/Guild/RosterWidget';

const GamePage = () => {
    return (
        <div>
            <RaidWidget />
            <Menu />
            <RosterWidget />
        </div>
    );
};

export default GamePage;