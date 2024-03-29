import { TabListProps, TabPanelProps, TabProps, TabsProps } from '@chakra-ui/react'

export type StepListProps = TabListProps
export interface StepPanelProps extends TabPanelProps {}
export type StepsProps = TabsProps

export interface StepProps extends TabProps {
  label: string
  description?: string
}
