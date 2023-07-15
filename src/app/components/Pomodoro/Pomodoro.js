'use client';
import React from 'react';
import styled from 'styled-components';
import PomodoroTimer from './PomodoroTimer';
import Button from '../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

// Wrapper for component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
  box-shadow:
    hsl(0 0% 5% / 0.2) 0px 5px 15px,
    hsl(0 0% 5% / 0.1) 0px 1px 2px;
  overflow: hidden;
  max-width: 400px;
  min-height: 400px;
`;

const Heading = styled.div`
  padding: 8px 16px;
`;

const SubHeading = styled.div`
  padding: 8px 0;
`;

const HR = styled.hr`
  border: 1px solid hsl(205, 0%, 95%);
`;

const ConfigWrapper = styled.div`
  padding: 0 16px;
`;

const ConfigGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  //justify-content: center;
`;

const ConfigGroupInline = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ConfigItemInline = styled.div`
  width: 100px;
`;

const InlineLabel = styled.div`
  font-size: 0.875rem;
`;

const ConfigItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NumberInput = styled.input`
  width: min(100px, 100%);
  padding: 8px;
  //margin: 0 16px;
  //width: 72px;
  border: none;
  border-radius: 4px;
  background-color: hsl(205, 0%, 95%);
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  background-color: hsl(205, 0%, 95%);
`;

const ButtonContainer = styled.div`
  padding: 0 16px;
`;

const ConfigButton = styled.button`
  //padding: 2px;
  position: absolute;
  top: 120px;
  left: 388px;
  border: none;
  background-color: inherit;
  color: hsl(205, 0%, 55%);

  &:hover {
    color: hsl(205, 62%, 49%);
  }
`;

const defaultConfig = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 10,
  interval: 4,
};

function Pomodoro() {
  const [config, setConfig] = React.useState(defaultConfig);
  const [configForm, setConfigForm] = React.useState(config);
  const [isConfigActive, setIsConfigActive] = React.useState(false);

  return (
    <div>
      {!isConfigActive && (
        <ConfigButton
          name='Configure Pomodoro'
          onClick={() => setIsConfigActive(true)}
        >
          <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
        </ConfigButton>
      )}
      {isConfigActive ? (
        <Container>
          <ConfigWrapper>
            <SubHeading>
              <h3>Settings</h3>
            </SubHeading>
            <HR />
            <ConfigGroup>
              <SubHeading>
                <h4>Time (minutes)</h4>
              </SubHeading>
              <ConfigGroupInline>
                <ConfigItemInline>
                  <InlineLabel htmlFor='pomodoro'>Pomdoro</InlineLabel>
                  <NumberInput
                    id='pomodoro'
                    name='Pomodoro'
                    type='number'
                    value={configForm.pomodoro}
                    onChange={(e) => {
                      setConfigForm({
                        ...configForm,
                        pomodoro: e.target.value,
                      });
                    }}
                  ></NumberInput>
                </ConfigItemInline>
                <ConfigItemInline>
                  <InlineLabel htmlFor='shortBreak'>Short Break</InlineLabel>
                  <NumberInput
                    id='shortBreak'
                    name='Short Break'
                    type='number'
                    value={configForm.shortBreak}
                    onChange={(e) =>
                      setConfigForm({
                        ...configForm,
                        shortBreak: e.target.value,
                      })
                    }
                  ></NumberInput>
                </ConfigItemInline>
                <ConfigItemInline>
                  <InlineLabel htmlFor='longBreak'>Long Break</InlineLabel>
                  <NumberInput
                    id='longBreak'
                    name='Long Break'
                    type='number'
                    value={configForm.longBreak}
                    onChange={(e) =>
                      setConfigForm({
                        ...configForm,
                        longBreak: e.target.value,
                      })
                    }
                  ></NumberInput>
                </ConfigItemInline>
              </ConfigGroupInline>
            </ConfigGroup>
            <ConfigGroup>
              <ConfigItem>
                <SubHeading>
                  <h4>
                    <label htmlFor='interval'>Long Break Interval</label>
                  </h4>
                </SubHeading>
                <NumberInput
                  id='interval'
                  name='Long Break Interval'
                  type='number'
                  value={configForm.interval}
                  onChange={(e) =>
                    setConfigForm({ ...configForm, interval: e.target.value })
                  }
                ></NumberInput>
              </ConfigItem>
            </ConfigGroup>
          </ConfigWrapper>
          <ButtonGroup>
            <ButtonContainer>
              <Button
                name='Set pomodoro configuration to default'
                onClick={() => setConfigForm(defaultConfig)}
              >
                Default
              </Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button
                name='Save pomodoro configuration changes'
                onClick={() => {
                  setConfig(configForm);
                  setIsConfigActive(false);
                }}
              >
                Save
              </Button>
              <Button
                name='Cancel pomodoro configuration changes'
                onClick={() => {
                  setConfigForm(config);
                  setIsConfigActive(false);
                }}
                style='danger'
              >
                Cancel
              </Button>
            </ButtonContainer>
          </ButtonGroup>
        </Container>
      ) : (
        <Container>
          <PomodoroTimer config={config}></PomodoroTimer>
        </Container>
      )}
    </div>
  );
}

export default Pomodoro;
