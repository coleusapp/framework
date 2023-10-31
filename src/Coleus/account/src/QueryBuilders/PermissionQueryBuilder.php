<?php

namespace Coleus\Account\QueryBuilders;

use Illuminate\Database\Eloquent\Builder;

class PermissionQueryBuilder extends Builder
{
    public function search(?string $search)
    {
        return $this->when($search,
            fn ($query, $search) => $query->where(
                fn ($query) => $query->where('name', 'like', "%{$search}%")
            )
        );
    }
}
