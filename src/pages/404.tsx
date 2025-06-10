import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { Typography, Button, Box } from "@mui/material"
import { Layout } from "../components/Layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h2" gutterBottom>
          Page not found
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sorry 😔, we couldn’t find what you were looking for.
        </Typography>
        {process.env.NODE_ENV === "development" && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Try creating a page in <Box component="span" sx={{ fontFamily: 'monospace', bgcolor: '#FFF4DB', px: 1, borderRadius: 1, color: '#8A6534' }}>src/pages/</Box>.
          </Typography>
        )}
        <Button href="/" variant="contained" sx={{ mt: 4 }}>
          Go home
        </Button>
      </Box>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
