import { Fragment } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useCycles } from '@hooks/useCycles'

import { NewCycleFormData } from '@pages/Home/scheme'

import { NewCycleFormStyles as Styles } from './styles'

export function NewCycleForm() {
  const { t } = useTranslation('timer')

  const { activeCycle, cycles } = useCycles()
  const { register } = useFormContext<NewCycleFormData>()

  return (
    <Styles.Container>
      <Styles.FieldsContainer>
        <label htmlFor="task">{t('i_will_work_in')}</label>
        <Styles.TaskInput
          type="text"
          id="task"
          list="task-suggestions"
          placeholder={t('name_your_activity')}
          disabled={!!activeCycle}
          {...register('task')}
        />

        <datalist id="task-suggestions">
          {cycles.map((cycle) => (
            <Fragment key={cycle.id}>
              {!cycle.finishedDate && <option value={cycle.task} />}
            </Fragment>
          ))}
        </datalist>

        <label htmlFor="minutesAmount">{t('during')}</label>
        <Styles.MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={1}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />

        <label htmlFor="minutesAmount">{t('minutes')}.</label>
      </Styles.FieldsContainer>
    </Styles.Container>
  )
}
