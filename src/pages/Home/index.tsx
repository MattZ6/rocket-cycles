import { Play } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import { HomePageStyles as Styles } from './styles'

export default function HomePage() {
  const { t } = useTranslation('timer')

  return (
    <Styles.Container>
      <Styles.Form action="">
        <Styles.FieldsContainer>
          <label htmlFor="task">{t('i_will_work_in')}</label>
          <Styles.TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder={t('name_your_activity')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">{t('during')}</label>
          <Styles.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <label htmlFor="minutesAmount">{t('minutes')}.</label>
        </Styles.FieldsContainer>

        <Styles.CountdownContainer>
          <Styles.CountdownNumber>0</Styles.CountdownNumber>
          <Styles.CountdownNumber>0</Styles.CountdownNumber>
          <Styles.CountdownSeparator>:</Styles.CountdownSeparator>
          <Styles.CountdownNumber>0</Styles.CountdownNumber>
          <Styles.CountdownNumber>0</Styles.CountdownNumber>
        </Styles.CountdownContainer>

        <Styles.StartCountdownButton disabled type="submit">
          <Play size={24} />
          {t('start')}
        </Styles.StartCountdownButton>
      </Styles.Form>
    </Styles.Container>
  )
}
