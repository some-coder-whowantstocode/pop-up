import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import nextjs from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts'

export default [{
    input: 'src/popupContext.tsx',
    output: {
        file: 'dist/bundle.js',
        format: 'esm'
    },
    external: ['react', 'react-dom'],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json'
        }),
        postcss({
            modules: true,  
            extract:false
        }),
        json(),
        nextjs()
    ]
},
{
    input:'src/type.tsx',
    output:{
        file:'dist/bundle.d.ts',
        format:'es'
    },
    plugins:[
        dts()
    ]
}
];
