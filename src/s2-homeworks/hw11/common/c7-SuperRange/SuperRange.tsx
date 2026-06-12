import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 147,

                '& .MuiSlider-track': {
                    backgroundColor: '#0c2',
                    border: 'none',
                },

                '& .MuiSlider-rail': {
                    backgroundColor: '#8b8b8b',
                },

                '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                    backgroundColor: '#fff',
                    border: '1px solid #0c2',
                    boxShadow: '0 0 2px 0 rgba(29, 33, 38, 0.1), 0 0 40px 0 rgba(29, 33, 38, 0.13)',

                    '&::before': {
                        boxShadow: 'none',
                    },

                    '&::after': {
                        content: '""',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: '#01cb22',
                        position: 'absolute',
                    },
                },
            }}
            {...props}
        />
    )
}

export default SuperRange
