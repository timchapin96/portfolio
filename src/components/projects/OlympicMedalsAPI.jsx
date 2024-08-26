export default function OlympicMedalsAPI () {
  return (
    <div className='project'>
      <div className='project-header'>
        <div className='project-img'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/timchapin96/olypmic-medals-2024-api'
            alt='olympic medals API Documentation'
          >
            <img src='/olympic_medals.jpg' alt='thumbnail'></img>
          </a>
        </div>
        <div className='project-title'>
          <h2>2024 Olympic Medals API</h2>
        </div>
      </div>
      <div className='project-body'>
        <p>
          This Rails API was designed to provide data regarding 2024 olympic
          medal counts via parameter queries.
        </p>
      </div>
      <div className='tech-stack'>
        <ul>
          <li>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/rails/rails-plain.svg'
              alt='rails icon'
            ></img>
          </li>
          <li>
            <img
              src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/postgresql/postgresql-plain.svg'
              alt='postgres icon'
            ></img>
          </li>
        </ul>
      </div>
    </div>
  )
}
