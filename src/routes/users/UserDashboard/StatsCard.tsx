import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react'
import {ReactNode} from 'react'

interface StatsCardProps {
  title: string
  stat: string
  icon: ReactNode
  percent: number
  percentUpOrDown: 'increase' | 'decrease'
}
export const StatsCard = (props: StatsCardProps) => {
  const {title, stat, icon, percent, percentUpOrDown} = props
  return (
    <Stat
      px={{base: 2, md: 4}}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{base: 2, md: 4}}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
          <StatHelpText>
            <StatArrow type={percentUpOrDown} />
            {percent}% cette semaine
          </StatHelpText>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}

export default StatsCard
