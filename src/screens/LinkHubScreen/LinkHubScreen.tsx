import React, { useRef } from 'react'
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

const domains = ['app.tidlor.com', 'www.prakantidloh.com']

const paths = [
  '',
  '/main',
  '/link/xxx',
  '/link/add_email',
  '/link/cmi',
  '/link/ctp',
  '/link/ewithdrawal',
  '/link/hospital',
  '/link/mcb',
  '/link/mission-overall',
  '/link/my_product',
  '/link/nearby_atm',
  '/link/notification',
  '/link/order_history',
  '/link/payment',
  '/link/profile',
  '/link/review',
  '/link/reward',
  '/link/reward-list',
  '/link/setting',
]

const LinkHubScreen = () => {
  useTitle(routes.LINK_HUB.title)
  const { width } = useWindowDimensions()
  const links = useRef(domains.map((domain) => paths.map((path) => `${domain}${path}`)))
  const [expanded, setExpanded] = React.useState<string | false>('accordion1')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Typography variant="h4" sx={{ mb: width <= 600 ? 2 : 4 }}>
        {routes.LINK_HUB.title}
      </Typography>
      {domains.map((domain, domainIndex) => (
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
            <Paper variant="outlined">
              <List>
                {links.current[domainIndex].map((item) => (
                  <ListItem>
                    <Link href={`https://${item}`} target="_blank" rel="noreferrer" sx={{ wordBreak: 'break-all' }}>
                      {`https://${item}`}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

export default LinkHubScreen
