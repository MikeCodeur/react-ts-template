import React from 'react'
import {ContainerPage, Box, Row, Col} from '../../../components/ui'
import {StatsCard} from './StatsCard'
import {LastQuestions} from './LastQuestions'
import {BsPerson, BsFillPersonCheckFill} from 'react-icons/bs'
import {FiServer} from 'react-icons/fi'
import {GoLocation} from 'react-icons/go'
const grid_2 = {
  xs: 8,
  sm: 8,
  md: 4,
  lg: 4,
  xl: 4,
  xxl: 4,
}
const grid_left = {
  xs: 12,
  sm: 12,
  md: 8,
  lg: 8,
  xl: 8,
  xxl: 8,
}
const grid_right = {
  xs: 8,
  sm: 8,
  md: 4,
  lg: 4,
  xl: 4,
  xxl: 4,
}

export const Dashboard = () => {
  return (
    <ContainerPage>
      <Box p={10}>
        <Row align="center" justify="center" direction="row" gutterWidth={5}>
          <Col grid={grid_left}>
            <Row
              align="center"
              justify="center"
              direction="row"
              gutterWidth={5}
            >
              <Col grid={grid_2}>
                <Box mt={10}>
                  <StatsCard
                    title={'Élèves'}
                    stat={'5,332'}
                    icon={<BsPerson size={'3em'} />}
                    percentUpOrDown={'increase'}
                    percent={33.4}
                  />
                </Box>
              </Col>
              <Col grid={grid_2}>
                <Box mt={10}>
                  <StatsCard
                    title={'Formations'}
                    stat={'56'}
                    icon={<FiServer size={'3em'} />}
                    percentUpOrDown={'decrease'}
                    percent={33.4}
                  />
                </Box>
              </Col>
              <Col grid={grid_2}>
                <Box mt={10}>
                  <StatsCard
                    title={'Espaces de travail'}
                    stat={'144'}
                    icon={<GoLocation size={'3em'} />}
                    percentUpOrDown={'increase'}
                    percent={33.4}
                  />
                </Box>
              </Col>
            </Row>
          </Col>
          <Col grid={grid_right}>
            <Box mt={10}>
              <StatsCard
                title={'Questions'}
                stat={'5,246'}
                icon={<BsFillPersonCheckFill size={'3em'} />}
                percentUpOrDown={'decrease'}
                percent={33.4}
              />
            </Box>
          </Col>
        </Row>
        <LastQuestions />
      </Box>
    </ContainerPage>
  )
}
