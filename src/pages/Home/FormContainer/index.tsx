import { useContext, useState } from 'react'
import { BlogContext } from '../../../context/Blog'
import { ComponentWrapper, Input } from './styles'
import { useForm } from 'react-hook-form'

export function FormContainer() {
  const { issues, fetchIssues } = useContext(BlogContext)
  const { register, watch, handleSubmit, reset } = useForm()
  const [isHidden, setIsHidden] = useState(true)

  const queryContent: string = watch('query')

  async function handleSearch() {
    await fetchIssues('victoriamartins', 'gitblog', 'published', queryContent)
    setIsHidden(false)
  }

  async function handleClearFilters() {
    reset()
    await fetchIssues('victoriamartins', 'gitblog', 'published', '')
    setIsHidden(true)
  }

  return (
    <ComponentWrapper>
      <header>
        <h2>Publicações</h2>
        <div>
          {' '}
          <button onClick={handleClearFilters} hidden={isHidden}>
            limpar filtros
          </button>
          <span>
            {issues.length === 1
              ? `${issues.length} publicação`
              : `${issues.length} publicações`}
          </span>
        </div>
      </header>

      <form action="" onSubmit={handleSubmit(handleSearch)}>
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </ComponentWrapper>
  )
}
