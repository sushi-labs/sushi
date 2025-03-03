import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import spec from '../public/openapi.json'
import './style.css'

export default function Swagger() {
  /* @ts-expect-error */
  return <SwaggerUI spec={spec} showCommonExtensions={true} />
}
