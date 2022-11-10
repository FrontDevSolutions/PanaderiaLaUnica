import React from 'react'
import './Domicilios.css';

const Domicilios = () => {
  return (
    <div><section className="u-clearfix u-section-1" id="sec-530b">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="fr-view u-clearfix u-rich-text u-text u-text-1">
          <h1 style={{ textAlign: 'left' }}>
            <span style={{ lineHeight: 2.0 }}>Domicilios</span>
          </h1>
          <p style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '1.25rem' }}>Horario de domicilios 9:00am 6:00pm</span>
          </p>
          <p style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '1.25rem' }}>Unicamente dentro de la ciudad de Sincelejo</span>
          </p>
          <p style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '1.25rem' }}>Domicilio gratis por compras superiores a $10mil</span>
          </p>
          <p style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '1.25rem' }}>Comunicate para agendar el domicilio</span>
          </p>
        </div><span className="u-file-icon u-icon u-icon-1"><img src="images/3059606.png" alt="" /></span>
        <h3 className="numero1">3203198136
          <img src="data:image/png;base64,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"></img>
        </h3>
        <h3 className="numero2">3013198136
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEf0lEQVRoge2ZXWgcVRiGn282/VH7k9pCNdjeWLKxKTXQIlKKtFoqqGiNdrtJuxsVbAgSFUW8KCheiIJIKdFWq6BNtslmW4rRoLUVtFZBBKWJTZOsCQpFrT+lsdSYZDPzeWED2WQ3mTMz297kuTtn5rzzvpyZs+d8CzPMUBDEzU3hZPwB0F1AGdBr4dR3Rw9+U1hrZkwZZM3bO2ddWjjYAFI74dKAWrIqHWn8pYDejLDyXQi3PTb/0sLBthwhAIrF0f0F9GVMzhkJt0RLRGYdV1g51WBFa9LRRGNhrJkxKciq5qqlGavoS6DUxfgLVkbLu2OJ34K3ZkbWq1We2jo7YxUdwV0IgEXObOut4G2ZkxXE1rnPAuuMFFTvDyd3bA/SlBeygqiS68OeHpU95alHbgjEkUcmrlpLPKkIizOO/aZ/O97JnhHw/NEKVJa2xLf5t+SNiTPS6UdMRF/yM94P1oTGpz71lvsc75msIJkRPgBsr2KKdPh25JGsIP3xpj9AvvAu5+zza8grufZaDR61OtI9KxJ+zPhh8l5LkXBr7BSw2kTIcnRzd3XieFDGTJk8I4Ii+rKhzkdXMwTk2cb3RhKHgJOuVZS2oAx5Jfd5RNCQY9UBGVcqwmsrkjU3B+jLmLwHqzPVB7qA3S51FoWwD69ujF0XjC1z8gYBsBcUvwB6yp2UVAzPlrYVH9fPCcKYKVMG6bunYdi2dDsw6E5O7wpdHEhu+HxDUQDejJgyCEBf5OAZFZ420Nxy7tyyvai7Ck1QhNzcdP5w5/dLHl59I8haV6rCmiVdFcXnD3cc9eXOgGlnZIx5f19bj3LCvbQ+FW6N7blSM2P0kMuFia8B10utKO/0hIbqiBzyvBl19RzTAeWp+PJRR78ClhkMaxv+NxT9+dH3h0yf5xZP035LMrbKgRPA9e5H6bE5I1LZGW/6J6s7tTVUZs+NqfAEUAH0Ifpi77ZEysST5/e3NBW/TRz9DJhvMKzTxqrsix7oBwg3x+7E0tdBKibeqNAumqntrUr+6kbY14dY2hrfJKrtgMmP4AWU58SSB1X13invVM4L8mRPVWPzdKK+V5TLlfpWzMKY0mZltG6qimYgS2NZy44NKvIhZq+ZKQMCz/dEm3IWzwNb48MtsbUIn+C1NuYW4eioU7Szv+q9s9ndAbKyuabctvQYaEmQujkYUEvuTkcavx3rcP3L7oYz1Qe6sHQ90B+kbg6KxdE3xncEGgSgN9L00+gI6zA5YXojPL4ReBD4v6xUZA1tUijkv1qnxzcKEgSgK3JoJB1tqlX0cVyfZ9wjyCvj2wULMkY6mnjXgbXuT5rTo9DQE21sH99X8CAAP0abuu0Fi24XeBW3BY18CEdLlp59ZnL3FWZlc025Y9l7FbnDfLT8YI/a6/t2HLw46UoQ5oxRJJyMP4Q4u3JtGPPQPcsZ3Xi6uuX3XBevTpAxFClLxe5zoF6UjUC+osVJdUYr09Utf+WTurpBxlF2JL5Yh3ULyGZEbwVuAv5E2Ddv4Jrd39Xu9/dtzTCDN/4DpEZgeHAVde0AAAAASUVORK5CYII="></img>
        </h3>
      </div>
    </section>
    </div>
  );
};

export default Domicilios;