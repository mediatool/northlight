import { TabListProps, TabPanelProps, TabProps, TabsProps } from '@chakra-ui/react'

export interface StepListProps extends TabListProps {}
export interface StepPanelProps extends TabPanelProps {}
export interface StepsProps extends TabsProps {}

export interface StepProps extends TabProps {
  label: string
  description?: string
}
