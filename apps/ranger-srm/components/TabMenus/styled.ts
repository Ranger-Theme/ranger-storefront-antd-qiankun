import styled from '@emotion/styled'

export const StyledTabMenus = styled.div`
  .${({ theme }) => theme.namespace} {
    &-tabs {
      width: 100%;
      height: 38px;
      padding: 4px 10px;
      background-color: rgb(255, 255, 255);
      box-shadow: rgba(174, 186, 208, 0.27) 0px 2px 8px 0px;

      .${({ theme }) => theme.namespace} {
        &-tabs-tab-remove {
          margin-left: 2px;
        }
      }
    }

    &-tabs-nav {
      margin-bottom: 0;

      &::before {
        border-width: 0;
      }

      .${({ theme }) => theme.namespace} {
        &-tabs-tab.${({ theme }) => theme.namespace}-tabs-tab-active {
          color: rgb(39, 152, 231);
          background: rgb(233, 243, 253);

          .${({ theme }) => theme.namespace} {
            &-close {
              color: rgb(39, 152, 231);
            }

            &-tabs-tab-btn {
              color: rgb(39, 152, 231);
            }
          }
        }

        &-tabs-tab {
          &:hover {
            color: rgb(39, 152, 231);
            background: rgb(233, 243, 253);

            .${({ theme }) => theme.namespace} {
              &-close {
                color: rgb(39, 152, 231);
              }
            }
          }
        }
      }
    }

    &-tabs-tab {
      height: 30px;
      color: rgb(102, 102, 102);
      font-size: 12px;
      border: none;
      user-select: none;
      border-radius: 4px !important;
      background: rgb(243, 243, 243);
    }
  }
`
