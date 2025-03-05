import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import spec from '../public/openapi.json'
import './style.css'

export default function Swagger() {
  return (
    /* @ts-expect-error */
    <SwaggerUI spec={spec} showExtensions={true} showCommonExtensions={true} />
  )
}
