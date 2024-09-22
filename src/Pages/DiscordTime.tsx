import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const DiscordTime = () => {
  const [calendarValue, setCalendarValue] = useState<Dayjs | null>(dayjs())
  const [dropdownValue, setdropdownValue] = useState('t')
  const returnDiscordTime = () => calendarValue ? `<t:${calendarValue.unix()}:${dropdownValue}>` : ''

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <DateTimePicker
          label="Discord Timestamp"
          value={calendarValue}
          onChange={(newValue) => setCalendarValue(newValue)}
        />

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={dropdownValue}
        label="Age"
        onChange={(event) => setdropdownValue(event.target.value)}
      >
        <MenuItem value={'t'}>Short Time</MenuItem>
        <MenuItem value={'T'}>Long Time</MenuItem>
        <MenuItem value={'d'}>Short Date</MenuItem>
        <MenuItem value={'D'}>Long Date</MenuItem>
        <MenuItem value={'f'}>Long Date w/ Short Time</MenuItem>
        <MenuItem value={'F'}>Long Date w/ Day and Short Time</MenuItem>
        <MenuItem value={'R'}>Relative</MenuItem>
      </Select>

      <>{returnDiscordTime()}</>

      <Button
        variant="outlined"
        onClick={() => setCalendarValue(dayjs())}
      >
        Reset to current time
      </Button>

      <Button
        variant="outlined"
        onClick={() => {
          const time = returnDiscordTime()
          navigator.clipboard.writeText(time)
          alert("Copied the text: " + time);
        }
      }
      >
        Copy to clipboard
      </Button>

      </LocalizationProvider>
  )
}

export default DiscordTime