import React, { useCallback } from 'react'
import { useTitle } from 'react-use'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'

import useWindowDimensions from '../../Utilities/useWindowDimensions'
import { routes } from '../../routes'
import { DOMAINS, PATHS } from './constant'

// Pre-compute links array at module level to avoid re-computation on every render
const LINKS = DOMAINS.map((domain) => PATHS.map((path) => `${domain}${path}`))

const LinkHubScreen = () => {
  useTitle(routes.LINK_HUB.title)
  const { width } = useWindowDimensions()
  const [expanded, setExpanded] = React.useState<string | null>(null)

  const handleChange = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : null)
    },
    [],
  )

  return (
    <div>
      <Typography variant="h4" sx={{ mb: width <= 600 ? 2 : 4 }}>
        {routes.LINK_HUB.title}
      </Typography>
      {DOMAINS.map((domain, domainIndex) => (
        <Accordion
          expanded={expanded === `accordion${domainIndex}`}
          onChange={handleChange(`accordion${domainIndex}`)}
          slotProps={{ transition: { unmountOnExit: true } }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ wordBreak: 'break-all' }}>
              {domain}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <LinkList links={LINKS[domainIndex]} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

const LinkList = React.memo(({ links }: { links: string[] }) => (
  <Paper variant="outlined">
    <List>
      {links.map((item) => (
        <ListItem key={item}>
          <Link href={`https://${item}`} target="_blank" rel="noreferrer" sx={{ wordBreak: 'break-all' }}>
            {`https://${item}`}
          </Link>
        </ListItem>
      ))}
    </List>
  </Paper>
))

LinkList.displayName = 'LinkList'

export default LinkHubScreen
