import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import './style.css'

export default function Swagger(props: React.ComponentProps<typeof SwaggerUI>) {
  const { showExtensions = true, showCommonExtensions = true, ...rest } = props
  return <SwaggerUI {...rest} showExtensions={showExtensions} showCommonExtensions={showCommonExtensions} />
}
