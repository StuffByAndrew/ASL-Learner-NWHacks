import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, Box } from '@mui/material';

export default function Tree() {
    return (
        <Card>
            <CardHeader title="roadmap" />
            <Box>
                <div className="tree">
                    <button className="btn">
                        Hello World
                    </button>
                    <button className="btn">
                        Hello World
                    </button>
                    <button className="btn">
                        Hello World
                    </button>
                </div>
            </Box>
        </Card>
    );
}