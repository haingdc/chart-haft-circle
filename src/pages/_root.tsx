export default async function RootElement({ children }) {
  return (
    <html lang='en'>
      <head>
        <style>
          {`
            @layer default {
              body {
                background-color: #efefef;
              }
            }

            @layer my-components {
              .thong-ke-ti-le {
                font-family: Nunito;
                font-display: swap;
                container-type: inline-size;
                max-width: 440px;
                display: flex;
                flex-direction: column;
                gap: 16px;
                border-radius: 20px;
                background-color: #fff;
                padding: 8px;
                .item {
                  padding: 8px 8px;
                  .head {
                    font-size: 16px;
                    color: #000;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                  }
                  .sub-head {
                    font-size: 14px;
                    margin-top: 4px;
                    color: #4f4b4b;
                    font-weight: normal;
                  }
                  .section {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                  }
                  .value {
                    font-size: 42px;
                    line-height: 0.7;
                    color: #000;
                  }
                  .head__icon {
                    border: 5px solid ;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    border-color: var(--color);
                  }
                  .head__value {
                    font-weight: bold;
                  }
                }
                .separator {
                  height: 1px;
                  background-color: #c3c3c3;
                  margin: 0 8px;
                }
              }
              @container (min-width: 600px) {
                .thong-ke-ti-le {
                  .item {
                    .head {
                      font-size: 20px;
                    }
                  }
                }
              }
            }
          `}
        </style>
      </head>
      <body data-version='1.0'>{children}</body>
    </html>
  )
}

export const getConfig = async () => {
  return {
    render: 'static',
  }
}
