import { NextPage } from 'next'
import { useForm } from 'react-hook-form'

const ReactHookForm: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm({
    mode: 'onChange'
  })

  return (
    <div className="bg-slate-100 flex w-screen h-screen items-center justify-center">
      <div className="bg-white shadow-sm p-10 w-96 rounded-lg">
        <h1 className="text-3xl font-medium text-violet-500 rounded-lg mb-4">
          React Hook Form
        </h1>
        <form
          className="flex gap-4 flex-col"
          onSubmit={handleSubmit(data => console.log(data))}
        >
          <div className="flex flex-col">
            <label className="text-violet-500">Primeiro Nome</label>

            <input
              type="text"
              className="border p-3 outline-none rounded-md border-violet-500 bg-violet-50 text-violet-500"
              autoComplete="off"
              {...register('name', {
                required: 'Campo obrigatório!',
                minLength: {
                  value: 4,
                  message: 'Min 4 caracteres'
                }
              })}
            />

            <span className="text-xs text-amber-500">
              {errors.name?.message}
            </span>
          </div>
          <div className="flex flex-col">
            <label className="text-violet-500">Idade</label>

            <input
              type="number"
              className="border p-3 outline-none rounded-md border-violet-500 bg-violet-50 text-violet-500"
              autoComplete="off"
              {...register('age', {
                required: 'Campo obrigatório',
                min: {
                  value: 18,
                  message: 'Min 18 anos'
                }
              })}
            />

            <span className="text-xs text-amber-500">
              {errors.age?.message}
            </span>
          </div>
          <button
            className="py-2.5 px-4 text-white rounded-md bg-violet-500"
            disabled={!isDirty || !isValid}
          >
            Criar Usuário
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm
