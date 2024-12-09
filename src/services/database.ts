import { supabase } from '../utils/supabaseClient';

export const getItems = async (page: number, size: number) => {
    const { data, error } = await supabase
        .from('items')
        .select('*')
        .order('created_at', { ascending: false })
        .range(page * size, (page + 1) * size - 1);

    if (error) {
        console.error('Erro ao buscar itens:', error);
        throw error;
    }

    return data;
};

export const insertItem = async (item: any) => {
    const { error } = await supabase.from('items').insert(item);

    if (error) {
        console.error('Erro ao inserir item:', error);
        throw error;
    }
};

export const updateItem = async (id: string, item: any) => {
    const { error } = await supabase.from('items').update(item).eq('id', id);

    if (error) {
        console.error('Erro ao atualizar item:', error);
        throw error;
    }
};

export const deleteItem = async (id: string) => {
    const { error } = await supabase.from('items').delete().eq('id', id);

    if (error) {
        console.error('Erro ao deletar item:', error);
        throw error;
    }
};