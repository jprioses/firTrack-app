import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({

    projectId: 'sl9wi3dd',
    dataset: 'production',
    title: 'FirTrack App',
    apiVersion: '2023-06-06',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {
        types: schemas
    }

})

export default config
