import React from 'react'
import { Box, Stack, Text } from '~lib/components'
import { SettingsTabs } from './tabs'

const SettingsPage = () => (
  <Box w="100%" h="100%" p={ 3 }>
    <Stack spacing={ 3 }>
      <Text fontSize="3xl">Settings</Text>
      <SettingsTabs />
    </Stack>
  </Box>
)

export default SettingsPage
